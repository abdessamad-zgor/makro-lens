class ClickStep {

}

class InputStep {

}

class ScriptStep {

}

type Step = ScriptStep | ClickStep | InputStep

type RecordingMode = "setup" | "macro" | "seal" | "none"

class Task {
  setup: Step[];
  macro: Step[];
  seal: Step[];
  recordingMode: RecordingMode;
  repeatMacroCount: number;
  url: string;

  constructor(url:string, setup= [], macro=[], seal = [], recordingMode:RecordingMode = "none" , repeatMacroCount = 1){
    this.url = url
    this.setup = setup
    this.macro = macro
    this.recordingMode = recordingMode
    this.repeatMacroCount = repeatMacroCount
    this.seal = seal
  }

  
}

class Client {
  static url: string = 'http://localhost:5445';
  constructor(){
    
  }


}
console.log("extension")
