import { Component , NgZone} from '@angular/core';

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.css']
})
export class VoiceRecognitionComponent {
    running: boolean = false;
    sr: any = null;
    transcript: string = '';
    constructor(public zone: NgZone){}
  
    speachToText() {
      if (this.sr == null) {
        const SpeechRecognition =
          (window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition;
        this.sr = new SpeechRecognition();
        this.sr.lang = 'en-US';
        this.sr.onresult = (event: any) => {
          this.zone.run(() => {
  
          this.transcript = this.transcript + ' ' + event.results[0][0].transcript;
          console.log(this.transcript);
        })
      };
      }
  
      if (this.running) {
        this.sr.stop();
        this.running = false;
        return;
      }
  
      this.sr.start();
      this.running = true;
    }
  }
  
