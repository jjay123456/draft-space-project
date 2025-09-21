export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      courses: {
        Row: {
          created_at: string
          description: string | null
          enrollment_code: string
          id: string
          status: Database["public"]["Enums"]["course_status"] | null
          title: string
          tutor_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          enrollment_code: string
          id?: string
          status?: Database["public"]["Enums"]["course_status"] | null
          title: string
          tutor_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          enrollment_code?: string
          id?: string
          status?: Database["public"]["Enums"]["course_status"] | null
          title?: string
          tutor_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      enrollments: {
        Row: {
          course_id: string
          enrolled_at: string
          id: string
          student_id: string
        }
        Insert: {
          course_id: string
          enrolled_at?: string
          id?: string
          student_id: string
        }
        Update: {
          course_id?: string
          enrolled_at?: string
          id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      external_tutors: {
        Row: {
          availability: Json | null
          bio: string | null
          created_at: string
          email: string
          hourly_rate: number | null
          id: string
          is_active: boolean | null
          name: string
          phone: string | null
          specializations: string[] | null
          timezone: string | null
          updated_at: string
        }
        Insert: {
          availability?: Json | null
          bio?: string | null
          created_at?: string
          email: string
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          phone?: string | null
          specializations?: string[] | null
          timezone?: string | null
          updated_at?: string
        }
        Update: {
          availability?: Json | null
          bio?: string | null
          created_at?: string
          email?: string
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          phone?: string | null
          specializations?: string[] | null
          timezone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          captions_url: string | null
          content: Json | null
          created_at: string
          duration_minutes: number | null
          id: string
          module_id: string
          order_index: number
          title: string
          transcript_url: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          captions_url?: string | null
          content?: Json | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          module_id: string
          order_index: number
          title: string
          transcript_url?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          captions_url?: string | null
          content?: Json | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          module_id?: string
          order_index?: number
          title?: string
          transcript_url?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          id: string
          order_index: number
          title: string
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          id?: string
          order_index: number
          title: string
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          id?: string
          order_index?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          accessibility_preferences: Json | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          display_name: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          timezone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          accessibility_preferences?: Json | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          timezone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          accessibility_preferences?: Json | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          timezone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      session_attendees: {
        Row: {
          created_at: string
          id: string
          joined_at: string | null
          left_at: string | null
          recording_consent: boolean | null
          session_id: string
          student_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          joined_at?: string | null
          left_at?: string | null
          recording_consent?: boolean | null
          session_id: string
          student_id: string
        }
        Update: {
          created_at?: string
          id?: string
          joined_at?: string | null
          left_at?: string | null
          recording_consent?: boolean | null
          session_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_attendees_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_attendees_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      sessions: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_recurring: boolean | null
          recording_transcript_url: string | null
          recording_url: string | null
          recurring_pattern: Json | null
          scheduled_at: string
          status: Database["public"]["Enums"]["session_status"] | null
          title: string
          tutor_id: string
          updated_at: string
          zoom_meeting_id: string | null
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          recording_transcript_url?: string | null
          recording_url?: string | null
          recurring_pattern?: Json | null
          scheduled_at: string
          status?: Database["public"]["Enums"]["session_status"] | null
          title: string
          tutor_id: string
          updated_at?: string
          zoom_meeting_id?: string | null
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          recording_transcript_url?: string | null
          recording_url?: string | null
          recurring_pattern?: Json | null
          scheduled_at?: string
          status?: Database["public"]["Enums"]["session_status"] | null
          title?: string
          tutor_id?: string
          updated_at?: string
          zoom_meeting_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tutor_sessions: {
        Row: {
          course_id: string | null
          created_at: string
          description: string | null
          duration_minutes: number
          external_tutor_id: string
          id: string
          rating: number | null
          scheduled_at: string
          status: string
          title: string
          tutee_feedback: string | null
          tutee_id: string
          tutor_notes: string | null
          updated_at: string
          zoom_meeting_id: string | null
          zoom_meeting_url: string | null
          zoom_password: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          external_tutor_id: string
          id?: string
          rating?: number | null
          scheduled_at: string
          status?: string
          title: string
          tutee_feedback?: string | null
          tutee_id: string
          tutor_notes?: string | null
          updated_at?: string
          zoom_meeting_id?: string | null
          zoom_meeting_url?: string | null
          zoom_password?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          external_tutor_id?: string
          id?: string
          rating?: number | null
          scheduled_at?: string
          status?: string
          title?: string
          tutee_feedback?: string | null
          tutee_id?: string
          tutor_notes?: string | null
          updated_at?: string
          zoom_meeting_id?: string | null
          zoom_meeting_url?: string | null
          zoom_password?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tutor_sessions_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tutor_sessions_external_tutor_id_fkey"
            columns: ["external_tutor_id"]
            isOneToOne: false
            referencedRelation: "external_tutors"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_enrollment_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      course_status: "draft" | "published" | "archived"
      session_status: "scheduled" | "live" | "completed" | "cancelled"
      user_role: "tutor" | "student" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      course_status: ["draft", "published", "archived"],
      session_status: ["scheduled", "live", "completed", "cancelled"],
      user_role: ["tutor", "student", "admin"],
    },
  },
} as const
