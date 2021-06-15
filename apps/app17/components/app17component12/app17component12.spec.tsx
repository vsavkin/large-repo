import { render } from '@testing-library/react';

import App17component12 from './app17component12';

describe('App17component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component12 />);
    expect(baseElement).toBeTruthy();
  });
});
