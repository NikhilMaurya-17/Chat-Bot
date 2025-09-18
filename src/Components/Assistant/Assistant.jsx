import { useEffect, useState } from "react";
import { Assistant as GoogleAIAssistant } from "../../assistants/googleai";
import { Assistant as OpenAIAssistant } from "../../assistants/openai";
import { Assistant as DeepSeekAIAssistant } from "../../assistants/deepseekai";

import styles from "./Assistant.module.css";

const assistantMap = {
    googleai : GoogleAIAssistant,
    openai : OpenAIAssistant,
    deepseekai : DeepSeekAIAssistant,
}

export function Assistant({onAssistantChange}){
       const [value,setValue]= useState("googleai:gemini-2.0-flash");
       function handleValueChange(event){
        setValue(event.target.value);
       }

       useEffect(() => {
        const [assistant,model] = value.split(":")
        const AssistantClass = assistantMap[assistant];
        if(!AssistantClass) {
            throw new Error (`Unknown assistant: ${assistant} or model: ${model}`);
       }
       onAssistantChange (new AssistantClass(model));
    },[value])

    return(
        <div className={styles.Assistant}>
            <span>Assistant</span>
            <select defaultValue={value} onChange={handleValueChange}>
                <optgroup label="Google AI">
                    <option value="googleai:gemini-2.0-flash">Gemini 2.0 Flash</option>
                     <option value="googleai:gemini-2.0-flash-lite">Gemini 2.0 Flash-Lite</option>
                </optgroup>

                <optgroup label="Open AI">
                    <option value="openai:gpt-4o-mini">gpt-4o-mini</option>
                    <option value="openai:chatgpt-4o-latest">ChatGPT-4o</option>
                    </optgroup>
                
                
                <optgroup label="DeepSeek AI">
                    <option value="deepseekai:deepseek-chat">DeepSeek-v3</option>
                </optgroup>

            </select>
        </div>
    )
 }