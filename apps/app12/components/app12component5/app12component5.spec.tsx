import { render } from '@testing-library/react';

import App12component5 from './app12component5';

describe('App12component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component5 />);
    expect(baseElement).toBeTruthy();
  });
});
