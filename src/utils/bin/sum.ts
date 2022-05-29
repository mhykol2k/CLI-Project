import config from '../../../config.json'

const sum = async (args: string[]): Promise<string> => {
    return `    
 Summary
:---------------
 ${config.name}
 <u><a href="${config.resume_url}" target="_blank">CV</a></u>
 <u><a href="${config.social.github}" target="_blank">Github</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">LinkedIn</a></u>
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
:----------------------
`; 
}

export default sum