# MyCLI - Custom Command Line Tool

A fully functional CLI tool built with **Node.js + TypeScript** using Object-Oriented Programming concepts.

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Chanakyasinde/SESD_workshop2.git
cd mycommand

# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Link the CLI globally (optional)
npm link
```

## Running Commands

```bash
# If linked globally
mycli <command>

# Without linking
npx ts-node cli.ts <command>
```

## Available Commands

| Command | Description |
|---|---|
| `greet <name>` | Greet a user by name |
| `add <n1> <n2>` | Add two numbers together |
| `subtract <n1> <n2>` | Subtract second number from first |
| `multiply <n1> <n2>` | Multiply two numbers |
| `divide <n1> <n2>` | Divide first number by second |
| `joke` | Fetch a random joke from the internet |
| `github <username>` | Fetch GitHub user profile information |
| `weather <city>` | Fetch current weather information for a city |
| `time` | Display the current time |
| `random <min> <max>` | Generate a random number between min and max |
| `count <text>` | Count words and characters in a text |
| `password <length>` | Generate a random secure password |
| `port-check <port>` | Check if a port is available or in use |
| `init_ts <folderName>` | Initialize a new TypeScript project |

## Flags & Options

| Flag | Command | Description |
|---|---|---|
| `-u, --uppercase` | `greet` | Greet in uppercase |
| `-n, --no-symbols` | `password` | Exclude special characters |
| `-V, --version` | global | Display version number |
| `-h, --help` | global / any command | Display help information |

## Example Usage

```bash
# Greet someone
mycli greet John
# Output: Hello John

# Greet in uppercase
mycli greet John -u
# Output: HELLO JOHN

# Add two numbers
mycli add 10 5
# Output: Result: 15

# Divide with validation
mycli divide 10 0
# Output: Error: Cannot divide by zero

# Get a random joke
mycli joke
# Output: (random joke from API)

# Fetch GitHub user info
mycli github octocat
# Output: Name, Bio, Repos, Followers, Profile URL

# Get weather for a city
mycli weather London
# Output: Temperature, Condition, Humidity, Wind Speed

# Generate a password
mycli password 16
# Output: Generated Password: xK$3mN!pQ9@wR2&z

# Generate password without symbols
mycli password 16 -n
# Output: Generated Password: xK3mNpQ9wR2zAbCd

# Check port availability
mycli port-check 3000
# Output: Port 3000 is available

# Show current time
mycli time
# Output: Time: 11:24:54 PM

# Generate random number
mycli random 1 100
# Output: Random Number: 42

# Count words and characters
mycli count "Hello World"
# Output: Words: 2, Characters: 11

# Show version
mycli --version
# Output: 1.0.0

# Show help
mycli --help
```

## API Integrations

| API | Command | URL |
|---|---|---|
| Official Joke API | `joke` | `https://official-joke-api.appspot.com/random_joke` |
| GitHub Users API | `github` | `https://api.github.com/users/<username>` |
| Open-Meteo Weather API | `weather` | `https://api.open-meteo.com/v1/forecast` |

## Project Structure

```
mycommand/
├── cli.ts                    
├── cli_engine/
│   └── cli_engine.ts         
├── commands/
│   ├── greetCommand.ts       
│   ├── addCommand.ts         
│   ├── subtractCommand.ts    
│   ├── multiplyCommand.ts    
│   ├── divisionCommand.ts    
│   ├── jokeCommand.ts        
│   ├── githubCommand.ts      
│   ├── weatherCommand.ts     
│   ├── timeCommand.ts        
│   ├── randomCommand.ts      
│   ├── countCommand.ts       
│   ├── passwordCommand.ts    
│   ├── portCheckCommand.ts   
│   └── initTS.ts             
├── package.json
├── tsconfig.json
└── README.md
```

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **CLI Framework**: Commander.js
- **HTTP Client**: Axios
- **Styling**: Chalk (colored output)
