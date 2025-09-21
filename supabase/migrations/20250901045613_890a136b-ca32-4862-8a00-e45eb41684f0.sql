-- Remove analytics_events table completely
DROP TABLE IF EXISTS public.analytics_events;

-- Remove progress tracking fields from lessons table if they exist
-- (We'll keep the existing structure simple for now)

-- Create a single comprehensive English course with modules
-- First, check if we have existing courses
DO $$
BEGIN
  -- Insert the single English course if it doesn't exist
  INSERT INTO public.courses (id, title, description, tutor_id, status, enrollment_code)
  VALUES (
    'e4b8c9d1-1234-5678-9abc-def012345678'::uuid,
    'Complete English Language Learning Program',
    'Master English from fundamentals to advanced concepts with interactive lessons, real-world examples, and practical exercises designed for effective learning.',
    '00000000-0000-0000-0000-000000000000'::uuid, -- placeholder tutor_id
    'published'::course_status,
    'ENGLISH2024'
  )
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    status = EXCLUDED.status;

  -- Insert modules for the English course
  INSERT INTO public.modules (id, course_id, title, description, order_index) VALUES
    ('m1-basics', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'English Fundamentals', 'Learn the basics of English grammar, vocabulary, and pronunciation', 1),
    ('m2-grammar', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Grammar Mastery', 'Deep dive into English grammar rules and structures', 2),
    ('m3-vocabulary', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Vocabulary Building', 'Expand your English vocabulary with practical words and phrases', 3),
    ('m4-conversation', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Conversation Skills', 'Develop speaking and listening skills for real-world conversations', 4),
    ('m5-writing', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Writing Excellence', 'Master English writing from basic sentences to complex essays', 5),
    ('m6-advanced', 'e4b8c9d1-1234-5678-9abc-def012345678'::uuid, 'Advanced English', 'Achieve fluency with advanced concepts and professional English', 6)
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    order_index = EXCLUDED.order_index;

  -- Insert sample lessons for each module
  INSERT INTO public.lessons (id, module_id, title, order_index, duration_minutes) VALUES
    -- Module 1: Basics
    ('l1-1', 'm1-basics', 'Introduction to English Sounds', 1, 15),
    ('l1-2', 'm1-basics', 'Basic Greetings and Introductions', 2, 20),
    ('l1-3', 'm1-basics', 'Numbers and Time', 3, 18),
    ('l1-4', 'm1-basics', 'Common Everyday Words', 4, 22),
    
    -- Module 2: Grammar
    ('l2-1', 'm2-grammar', 'Nouns and Articles', 1, 25),
    ('l2-2', 'm2-grammar', 'Verbs and Tenses', 2, 30),
    ('l2-3', 'm2-grammar', 'Adjectives and Adverbs', 3, 20),
    ('l2-4', 'm2-grammar', 'Sentence Structure', 4, 28),
    
    -- Module 3: Vocabulary
    ('l3-1', 'm3-vocabulary', 'Family and Relationships', 1, 20),
    ('l3-2', 'm3-vocabulary', 'Food and Dining', 2, 25),
    ('l3-3', 'm3-vocabulary', 'Travel and Transportation', 3, 22),
    ('l3-4', 'm3-vocabulary', 'Work and Professions', 4, 24),
    
    -- Module 4: Conversation
    ('l4-1', 'm4-conversation', 'Making Small Talk', 1, 30),
    ('l4-2', 'm4-conversation', 'Asking for Help', 2, 25),
    ('l4-3', 'm4-conversation', 'Phone Conversations', 3, 28),
    ('l4-4', 'm4-conversation', 'Social Situations', 4, 32),
    
    -- Module 5: Writing
    ('l5-1', 'm5-writing', 'Basic Sentence Writing', 1, 25),
    ('l5-2', 'm5-writing', 'Paragraph Structure', 2, 30),
    ('l5-3', 'm5-writing', 'Email Writing', 3, 28),
    ('l5-4', 'm5-writing', 'Essay Writing Basics', 4, 35),
    
    -- Module 6: Advanced
    ('l6-1', 'm6-advanced', 'Business English', 1, 40),
    ('l6-2', 'm6-advanced', 'Academic English', 2, 38),
    ('l6-3', 'm6-advanced', 'Cultural Context', 3, 35),
    ('l6-4', 'm6-advanced', 'Fluency Practice', 4, 45)
  ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    order_index = EXCLUDED.order_index,
    duration_minutes = EXCLUDED.duration_minutes;

END $$;