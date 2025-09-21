-- Add admin role to user_role enum
ALTER TYPE user_role ADD VALUE 'admin';

-- Create external_tutors table for managing external tutor information
CREATE TABLE public.external_tutors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  specializations TEXT[],
  bio TEXT,
  hourly_rate DECIMAL(10,2),
  timezone TEXT DEFAULT 'UTC',
  availability JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tutor_sessions table for scheduling Zoom meetings between tutees and external tutors
CREATE TABLE public.tutor_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tutee_id UUID NOT NULL,
  external_tutor_id UUID NOT NULL REFERENCES public.external_tutors(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  zoom_meeting_id TEXT,
  zoom_meeting_url TEXT,
  zoom_password TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'no_show')),
  tutee_feedback TEXT,
  tutor_notes TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.external_tutors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tutor_sessions ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = $1 AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- RLS Policies for external_tutors
CREATE POLICY "Admins can manage all external tutors" 
ON public.external_tutors 
FOR ALL 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Tutees can view active external tutors" 
ON public.external_tutors 
FOR SELECT 
USING (is_active = true AND EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role = 'student'
));

-- RLS Policies for tutor_sessions
CREATE POLICY "Admins can manage all tutor sessions" 
ON public.tutor_sessions 
FOR ALL 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Tutees can view their own sessions" 
ON public.tutor_sessions 
FOR SELECT 
USING (tutee_id = auth.uid());

CREATE POLICY "Tutees can update their own session feedback" 
ON public.tutor_sessions 
FOR UPDATE 
USING (tutee_id = auth.uid())
WITH CHECK (tutee_id = auth.uid());

-- Add triggers for updated_at timestamps
CREATE TRIGGER update_external_tutors_updated_at
BEFORE UPDATE ON public.external_tutors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tutor_sessions_updated_at
BEFORE UPDATE ON public.tutor_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();