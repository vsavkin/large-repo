import { render } from '@testing-library/react';

import App5component40 from './app5component40';

describe('App5component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component40 />);
    expect(baseElement).toBeTruthy();
  });
});
