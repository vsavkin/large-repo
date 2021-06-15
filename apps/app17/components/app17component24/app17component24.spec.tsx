import { render } from '@testing-library/react';

import App17component24 from './app17component24';

describe('App17component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component24 />);
    expect(baseElement).toBeTruthy();
  });
});
