import axios from "axios";


const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = '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';


// const Ainvidia = async (prompt) => {
//   try {
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": Bearer ${OPENROUTER_API_KEY},
//         // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
//         // "X-Title": "<YOUR_SITE_NAME>",     // Optional
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
//         messages: [
//           {
//             role: "user",
//             content: prompt
//           }
//         ]
//       })
//     });

//     const data = await response.json();

//     console.log(typeof data); // should log "object"
//     console.log(data.choices[0].message.content); // access the response content
//     return data.choices[0].message.content;
//   } catch (error) {
//     console.error("Error fetching AI response:", error);
//     return null;
//   }
// };
const Ainvidia = async (prompt) => {
  // console.log(prompt)
  try {
    // console.log(OPENROUTER_API_KEY)
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY} `,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemma-3-4b-it:free",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();
    console.log("Full API response:", data);

    if (!data?.choices?.[0]?.message?.content) {
      throw new Error("Invalid response structure from OpenRouter AI");
    }

    return data.choices[0].message.content;

  }
   catch (error) {
    console.error("Error fetching AI response:", error.message);
    throw {
      statusCode: 408,
      success: false,
      errors: [error.message],
      data: null
    };
  }
};


export {Ainvidia}