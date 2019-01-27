export class Clock {
  time: any;

  static from(data: any) {
    const clock = new Clock();
    clock.time = data['time'];
    return clock;
  }
}
