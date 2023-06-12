export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      billing: {
        Row: {
          card_number: string | null
          created_at: string | null
          cvv: string | null
          expiration_date: string | null
          id: string
          subscription_type: string | null
        }
        Insert: {
          card_number?: string | null
          created_at?: string | null
          cvv?: string | null
          expiration_date?: string | null
          id?: string
          subscription_type?: string | null
        }
        Update: {
          card_number?: string | null
          created_at?: string | null
          cvv?: string | null
          expiration_date?: string | null
          id?: string
          subscription_type?: string | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string | null
          id: string
          movie_id: string | null
          storage_image_path: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          movie_id?: string | null
          storage_image_path: string
        }
        Update: {
          created_at?: string | null
          id?: string
          movie_id?: string | null
          storage_image_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "images_movie_id_fkey"
            columns: ["movie_id"]
            referencedRelation: "movies"
            referencedColumns: ["title"]
          }
        ]
      }
      movies: {
        Row: {
          created_at: string | null
          genre: string
          language_code: string
          title: string
          year: number
        }
        Insert: {
          created_at?: string | null
          genre: string
          language_code: string
          title: string
          year: number
        }
        Update: {
          created_at?: string | null
          genre?: string
          language_code?: string
          title?: string
          year?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          billing_id: string
          created_at: string
          email: string
        }
        Insert: {
          billing_id: string
          created_at?: string
          email: string
        }
        Update: {
          billing_id?: string
          created_at?: string
          email?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_billing_id_fkey"
            columns: ["billing_id"]
            referencedRelation: "billing"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
