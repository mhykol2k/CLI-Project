// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 1 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
Available commands:
-------------------
${c}
-------------------
[tab]: auto-complete.
[ctrl+l]: clear terminal.
-------------------\n
Type 'sum' to view summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening GitHub...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
  Type 'help' to see the list of available commands.
  Type 'repo' or click here for my Github.

  Type 'sum' to view summary.
`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening CV...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const git = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const stackoverflow = async (args: string[]): Promise<string> => {
  window.open(`https://stackoverflow.com/?q=${args.join(' ')}`);
  return `Searching stackoverflow for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const user = async (args: string[]): Promise<string> => {
  return `You are a ${config.ps1_username}. Welcome to my portfolio`;
};

export const socials = async (args: string[]): Promise<string> => {
  return `
  Twitter  : https://twitter.com/mhykol2k or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.twitter}" target="_blank">here</a></u>
  Steam    : https://steamcommunity.com/id/mhykol2k or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.steam}" target="_blank">here</a></u>
  GitHub   : https://github.com/mhykol2k or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.github}" target="_blank">here</a></u>
  LinkedIn : https://www.linkedin.com/ln/mhykol2k or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.linkedin}" target="_blank">here</a></u>
  `;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
node_modules
public
src
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `$ guest@mhykol2k-portfolio ~`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const ascii = (args?: string[]): string => {
  return`
███╗   ███╗██╗  ██╗██╗   ██╗██╗  ██╗ ██████╗ ██╗     
████╗ ████║██║  ██║╚██╗ ██╔╝██║ ██╔╝██╔═══██╗██║     
██╔████╔██║███████║ ╚████╔╝ █████╔╝ ██║   ██║██║     
██║╚██╔╝██║██╔══██║  ╚██╔╝  ██╔═██╗ ██║   ██║██║     
██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██╗╚██████╔╝███████╗
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `        
Welcome to my portfolio!

Type 'sum' to view a summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for my Github.
Type 'projects' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to view my projects.

Alternatively, you can type 'help' for additional info.

`;
};