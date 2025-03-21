export async function POST(request) {
    try {
      const formData = await request.json();
      // Optionally save to MongoDB or send via EmailJS
      return new Response(JSON.stringify({ message: "Form submitted successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to submit form" }), { status: 500 });
    }
  }