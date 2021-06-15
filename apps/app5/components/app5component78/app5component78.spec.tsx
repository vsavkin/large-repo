import { render } from '@testing-library/react';

import App5component78 from './app5component78';

describe('App5component78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component78 />);
    expect(baseElement).toBeTruthy();
  });
});
