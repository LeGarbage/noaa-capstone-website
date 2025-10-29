import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zpnwozhwupxmmwiuythm.supabase.co"
const supabaseKey = process.env.SUPABASE_KEY

export default {
    async fetch(request) {
        if (request.method !== "POST") {
            return new Response(
                JSON.stringify({ error: "Method not allowed" }), {
                status: 405,
                headers: { "Content-Type": "application/json" }
            }
            )
        }

        try {
            const body = await request.json()
            const { name, email, subject, message } = body

            if (!name || !email || !message) {
                return new Response(JSON.stringify({ error: "Missing fields" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                })
            }

            const supabase = createClient(supabaseUrl, supabaseKey)

            const { error } = await supabase.from("feedback").insert([{ name, email, message, subject }])

            if (error) {
                return new Response(JSON.stringify({ error: JSON.stringify(error) }), {
                    status: 500,
                    headers: { "Content-Type": "application/json" }
                })
            }

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            })

        } catch (err) {
            return new Response(JSON.stringify({ error: "Internal server error" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            })
        }
    }
}
