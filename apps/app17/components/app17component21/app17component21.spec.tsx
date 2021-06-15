import { render } from '@testing-library/react';

import App17component21 from './app17component21';

describe('App17component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component21 />);
    expect(baseElement).toBeTruthy();
  });
});
