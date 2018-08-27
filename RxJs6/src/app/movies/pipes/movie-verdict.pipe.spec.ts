import { MovieVerdictPipe } from './movie-verdict.pipe';

describe('MovieVerdictPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieVerdictPipe();
    expect(pipe).toBeTruthy();
  });
});
