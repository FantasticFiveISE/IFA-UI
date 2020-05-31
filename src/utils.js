

export const formatMessage = (message) => {
    return message.date.replace('T', ' ') + ': \n' + message.event + " in " + message.gameName + " game in minute " + message.minutes + " : " + message.description;
} 