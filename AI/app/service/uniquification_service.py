from openai import OpenAI
import os

def do_uniquification(prompts):
    api_key = os.getenv("OPENAI_API_KEY")
    command = os.getenv("COMMAND_UNIQUIFICATION")
    client = OpenAI(api_key=api_key)
    
    system_content = str(len(prompts)) + str(command)
    
    messages = [
        {"role": "system", "content": system_content},
    ]
    for prompt in prompts:
        messages.append({"role": "user", "content": prompt})
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    
    generated_text = str(completion.choices[0].message.content)
    return generated_text
