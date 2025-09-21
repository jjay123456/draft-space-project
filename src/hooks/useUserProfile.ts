import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface UserProfile {
  id: string;
  user_id: string;
  email: string | null;
  display_name: string | null;
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  timezone: string | null;
  role: string | null;
  accessibility_preferences: any | null;
  created_at: string;
  updated_at: string;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) {
          setError(error.message);
        } else {
          setProfile(data);
        }
      } catch (err) {
        setError('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const updateRole = async (newRole: string) => {
    if (!user || !profile) {
      throw new Error('No user or profile found');
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ role: newRole as any })
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        setError(error.message);
        throw error;
      } else {
        setProfile(data);
      }
    } catch (err) {
      setError('Failed to update role');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, updateRole };
};