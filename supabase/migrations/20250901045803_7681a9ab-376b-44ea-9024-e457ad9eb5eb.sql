-- Remove analytics_events table completely
DROP TABLE IF EXISTS public.analytics_events;

-- Create a single comprehensive English course with modules
-- Use existing profile user_id as tutor
DO $$
DECLARE
  tutor_user_id uuid;
BEGIN
  -- Get the first user_id from profiles table to use as tutor
  SELECT user_id INTO tutor_user_id FROM public.profiles LIMIT 1;
  
  -- If no users exist, create a placeholder (this shouldn't happen in practice)
  IF tutor_user_id IS NULL THEN
    tutor_user_id := gen_random_uuid();
    INSERT INTO public.profiles (user_id, email, display_name, role)
    VALUES (tutor_user_id, 'tutor@ihear.com', 'iHear Tutor', 'tutor');
  END IF;

  -- Insert the single English course if it doesn't exist
  INSERT INTO public.courses (id, title, description, tutor_id, status, enrollment_code)
  VALUES (
    'e4b8c9d1-1234-5678-9abc-def012345678'::uuid,
    'Complete English Language Learning Program',
    'Master English from fundamentals to advanced concepts with interactive lessons, real-world examples, and practical exercises designed for effective learning.',
    tutor_user_id,
    'published'::course_status,
    'ENGLISH2024'
  )
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    status = EXCLUDED.status;

  -- Insert modules for the English course
  INSERT INTO public.modules (id, course_id, title, description, order_index) VALUES
    ('11111111-1111-1111-1111-111111111111'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'English Fundamentals', 'Learn the basics of English grammar, vocabulary, and pronunciation', 1),
    ('22222222-2222-2222-2222-222222222222'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Grammar Mastery', 'Deep dive into English grammar rules and structures', 2),
    ('33333333-3333-3333-3333-333333333333'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Vocabulary Building', 'Expand your English vocabulary with practical words and phrases', 3),
    ('44444444-4444-4444-4444-444444444444'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Conversation Skills', 'Develop speaking and listening skills for real-world conversations', 4),
    ('55555555-5555-5555-5555-555555555555'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Writing Excellence', 'Master English writing from basic sentences to complex essays', 5),
    ('66666666-6666-6666-6666-666666666666'::uuid, 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Advanced English', 'Achieve fluency with advanced concepts and professional English', 6)
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    order_index = EXCLUDED.order_index;

  -- Insert sample lessons for each module
  INSERT INTO public.lessons (id, module_id, title, order_index, duration_minutes) VALUES
    -- Module 1: Basics
    ('1111a111-1111-1111-1111-111111111111'::uuid, '11111111-1111-1111-1111-111111111111'::uuid, 'Introduction to English Sounds', 1, 15),
    ('1111b111-1111-1111-1111-111111111111'::uuid, '11111111-1111-1111-1111-111111111111'::uuid, 'Basic Greetings and Introductions', 2, 20),
    ('1111c111-1111-1111-1111-111111111111'::uuid, '11111111-1111-1111-1111-111111111111'::uuid, 'Numbers and Time', 3, 18),
    ('1111d111-1111-1111-1111-111111111111'::uuid, '11111111-1111-1111-1111-111111111111'::uuid, 'Common Everyday Words', 4, 22),
    
    -- Module 2: Grammar
    ('2222a222-2222-2222-2222-222222222222'::uuid, '22222222-2222-2222-2222-222222222222'::uuid, 'Nouns and Articles', 1, 25),
    ('2222b222-2222-2222-2222-222222222222'::uuid, '22222222-2222-2222-2222-222222222222'::uuid, 'Verbs and Tenses', 2, 30),
    ('2222c222-2222-2222-2222-222222222222'::uuid, '22222222-2222-2222-2222-222222222222'::uuid, 'Adjectives and Adverbs', 3, 20),
    ('2222d222-2222-2222-2222-222222222222'::uuid, '22222222-2222-2222-2222-222222222222'::uuid, 'Sentence Structure', 4, 28),
    
    -- Module 3: Vocabulary
    ('3333a333-3333-3333-3333-333333333333'::uuid, '33333333-3333-3333-3333-333333333333'::uuid, 'Family and Relationships', 1, 20),
    ('3333b333-3333-3333-3333-333333333333'::uuid, '33333333-3333-3333-3333-333333333333'::uuid, 'Food and Dining', 2, 25),
    ('3333c333-3333-3333-3333-333333333333'::uuid, '33333333-3333-3333-3333-333333333333'::uuid, 'Travel and Transportation', 3, 22),
    ('3333d333-3333-3333-3333-333333333333'::uuid, '33333333-3333-3333-3333-333333333333'::uuid, 'Work and Professions', 4, 24),
    
    -- Module 4: Conversation
    ('4444a444-4444-4444-4444-444444444444'::uuid, '44444444-4444-4444-4444-444444444444'::uuid, 'Making Small Talk', 1, 30),
    ('4444b444-4444-4444-4444-444444444444'::uuid, '44444444-4444-4444-4444-444444444444'::uuid, 'Asking for Help', 2, 25),
    ('4444c444-4444-4444-4444-444444444444'::uuid, '44444444-4444-4444-4444-444444444444'::uuid, 'Phone Conversations', 3, 28),
    ('4444d444-4444-4444-4444-444444444444'::uuid, '44444444-4444-4444-4444-444444444444'::uuid, 'Social Situations', 4, 32),
    
    -- Module 5: Writing
    ('5555a555-5555-5555-5555-555555555555'::uuid, '55555555-5555-5555-5555-555555555555'::uuid, 'Basic Sentence Writing', 1, 25),
    ('5555b555-5555-5555-5555-555555555555'::uuid, '55555555-5555-5555-5555-555555555555'::uuid, 'Paragraph Structure', 2, 30),
    ('5555c555-5555-5555-5555-555555555555'::uuid, '55555555-5555-5555-5555-555555555555'::uuid, 'Email Writing', 3, 28),
    ('5555d555-5555-5555-5555-555555555555'::uuid, '55555555-5555-5555-5555-555555555555'::uuid, 'Essay Writing Basics', 4, 35),
    
    -- Module 6: Advanced
    ('6666a666-6666-6666-6666-666666666666'::uuid, '66666666-6666-6666-6666-666666666666'::uuid, 'Business English', 1, 40),
    ('6666b666-6666-6666-6666-666666666666'::uuid, '66666666-6666-6666-6666-666666666666'::uuid, 'Academic English', 2, 38),
    ('6666c666-6666-6666-6666-666666666666'::uuid, '66666666-6666-6666-6666-666666666666'::uuid, 'Cultural Context', 3, 35),
    ('6666d666-6666-6666-6666-666666666666'::uuid, '66666666-6666-6666-6666-666666666666'::uuid, 'Fluency Practice', 4, 45)
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    order_index = EXCLUDED.order_index,
    duration_minutes = EXCLUDED.duration_minutes;

END $$;