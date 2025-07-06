import axios from "axios"

const gemini_Url=process.env.GEMINI_API_URL;

const gemini_response= async(prompt)=>{
    try {
        const result= await axios.post(gemini_Url,{
            "contents": [
                {
                  "parts": [
                    {
                      "text": prompt
                    }
                  ]
                }
              ]
        })
        return result.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.log("Error in gemini response",error)
    }
}


export default gemini_response;
