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
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ai_daily_poems: {
        Row: {
          content_en: string
          content_es: string
          content_eu: string
          created_at: string
          date: string
          id: string
          is_active: boolean
          poem_type: string
          title_en: string
          title_es: string
          title_eu: string
          updated_at: string
        }
        Insert: {
          content_en: string
          content_es: string
          content_eu: string
          created_at?: string
          date: string
          id?: string
          is_active?: boolean
          poem_type?: string
          title_en: string
          title_es: string
          title_eu: string
          updated_at?: string
        }
        Update: {
          content_en?: string
          content_es?: string
          content_eu?: string
          created_at?: string
          date?: string
          id?: string
          is_active?: boolean
          poem_type?: string
          title_en?: string
          title_es?: string
          title_eu?: string
          updated_at?: string
        }
        Relationships: []
      }
      bizkardo_contacts: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      day_bars: {
        Row: {
          close: number
          created_at: string
          date: string
          high: number
          low: number
          open: number
          prior_close: number | null
          symbol: string
          updated_at: string
          volume: number
        }
        Insert: {
          close: number
          created_at?: string
          date: string
          high: number
          low: number
          open: number
          prior_close?: number | null
          symbol: string
          updated_at?: string
          volume: number
        }
        Update: {
          close?: number
          created_at?: string
          date?: string
          high?: number
          low?: number
          open?: number
          prior_close?: number | null
          symbol?: string
          updated_at?: string
          volume?: number
        }
        Relationships: []
      }
      derived_minute_metrics: {
        Row: {
          atr: number | null
          created_at: string
          current_price: number
          from_open_return: number | null
          ma_fast: number | null
          ma_slow: number | null
          pct_change_10m: number | null
          pct_change_60m: number | null
          price_vs_vwap: number | null
          rsi: number | null
          rvol: number | null
          symbol: string
          time: string
          volume_current: number | null
          vwap: number | null
        }
        Insert: {
          atr?: number | null
          created_at?: string
          current_price: number
          from_open_return?: number | null
          ma_fast?: number | null
          ma_slow?: number | null
          pct_change_10m?: number | null
          pct_change_60m?: number | null
          price_vs_vwap?: number | null
          rsi?: number | null
          rvol?: number | null
          symbol: string
          time: string
          volume_current?: number | null
          vwap?: number | null
        }
        Update: {
          atr?: number | null
          created_at?: string
          current_price?: number
          from_open_return?: number | null
          ma_fast?: number | null
          ma_slow?: number | null
          pct_change_10m?: number | null
          pct_change_60m?: number | null
          price_vs_vwap?: number | null
          rsi?: number | null
          rvol?: number | null
          symbol?: string
          time?: string
          volume_current?: number | null
          vwap?: number | null
        }
        Relationships: []
      }
      minute_bars: {
        Row: {
          close: number
          created_at: string
          high: number
          low: number
          open: number
          symbol: string
          time: string
          volume: number
        }
        Insert: {
          close: number
          created_at?: string
          high: number
          low: number
          open: number
          symbol: string
          time: string
          volume: number
        }
        Update: {
          close?: number
          created_at?: string
          high?: number
          low?: number
          open?: number
          symbol?: string
          time?: string
          volume?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      quotes: {
        Row: {
          access_token: string | null
          address: string | null
          budget: string | null
          created_at: string
          description: string | null
          door_type: string
          email: string
          estimate: number
          id: string
          installation_type: string
          language: string
          name: string
          phone: string
          status: string
          updated_at: string
          urgency: string | null
          user_id: string | null
        }
        Insert: {
          access_token?: string | null
          address?: string | null
          budget?: string | null
          created_at?: string
          description?: string | null
          door_type: string
          email: string
          estimate: number
          id?: string
          installation_type: string
          language?: string
          name: string
          phone: string
          status?: string
          updated_at?: string
          urgency?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string | null
          address?: string | null
          budget?: string | null
          created_at?: string
          description?: string | null
          door_type?: string
          email?: string
          estimate?: number
          id?: string
          installation_type?: string
          language?: string
          name?: string
          phone?: string
          status?: string
          updated_at?: string
          urgency?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      quotes_audit_log: {
        Row: {
          access_type: string
          accessed_at: string | null
          accessed_by: string
          id: string
          ip_address: unknown | null
          quote_id: string | null
          user_agent: string | null
        }
        Insert: {
          access_type: string
          accessed_at?: string | null
          accessed_by: string
          id?: string
          ip_address?: unknown | null
          quote_id?: string | null
          user_agent?: string | null
        }
        Update: {
          access_type?: string
          accessed_at?: string | null
          accessed_by?: string
          id?: string
          ip_address?: unknown | null
          quote_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quotes_audit_log_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      securities: {
        Row: {
          created_at: string
          market_cap: number | null
          name: string
          sector: string | null
          symbol: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          market_cap?: number | null
          name: string
          sector?: string | null
          symbol: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          market_cap?: number | null
          name?: string
          sector?: string | null
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          cheese_weight: string | null
          created_at: string
          email: string
          id: string
          language_preference: string | null
          monthly_price: number | null
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          cheese_weight?: string | null
          created_at?: string
          email: string
          id?: string
          language_preference?: string | null
          monthly_price?: number | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          cheese_weight?: string | null
          created_at?: string
          email?: string
          id?: string
          language_preference?: string | null
          monthly_price?: number | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      log_quote_access: {
        Args: {
          access_type: string
          ip_address?: unknown
          quote_id: string
          user_agent?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      cheese_tier: "quarter_kg" | "half_kg" | "one_kg" | "two_kg"
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
      cheese_tier: ["quarter_kg", "half_kg", "one_kg", "two_kg"],
    },
  },
} as const
