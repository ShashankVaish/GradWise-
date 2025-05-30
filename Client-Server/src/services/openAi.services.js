import axios from 'axios'

export class openAiService{
    async AiMessage(data){
        try {
            const response = await axios.post(`http://13.234.29.211:3000/ai/api/test2`,data,{ withCredentials: true });
            if(response){
                console.log(response)
                return response;
            }
        } catch (error) {
            console.error("backend service error student AiMessage failed",error)
        }
    }
    async AiData(data){
        try {
            const response = await axios.post(`http://13.234.29.211:3000/ai/api/test`,data,{ withCredentials: true });
            if(response){
                console.log(response)
                return response;
            }
        } catch (error) {
            console.error("backend service error student AiData failed",error)
        }
    }

}



export default openAiService
