import { render } from '@testing-library/react';

import App17component3 from './app17component3';

describe('App17component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component3 />);
    expect(baseElement).toBeTruthy();
  });
});
