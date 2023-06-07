
export function extractUserAgent(agent) {

  if(navigator.userAgent.includes("Chrome")){
    agent = "Chrome";
  }else if(navigator.userAgent.includes("Firefox")){
    agent = "Firefox";
  }else if(navigator.userAgent.includes("Safari")){
    agent = "Safari";
  }else if(navigator.userAgent.includes("Edge")){
    agent = "Edge";
  }else if(navigator.userAgent.includes("Opera")){
    agent = "Opera";
  }else if(navigator.userAgent.includes("IE")){
    agent = "IE";
  }else {
    agent = "Comviq";
  }
  return agent;
}