import { useState, useEffect } from 'react';
import { useUserProfile } from './useUserProfile';

export const useIsAdmin = () => {
  const { profile, loading: profileLoading } = useUserProfile();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profileLoading) {
      setIsAdmin(profile?.role === 'admin');
      setLoading(false);
    }
  }, [profile, profileLoading]);

  return { isAdmin, loading };
};