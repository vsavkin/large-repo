import { render } from '@testing-library/react';

import App17component7 from './app17component7';

describe('App17component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component7 />);
    expect(baseElement).toBeTruthy();
  });
});
