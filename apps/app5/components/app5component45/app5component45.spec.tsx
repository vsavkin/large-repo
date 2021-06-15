import { render } from '@testing-library/react';

import App5component45 from './app5component45';

describe('App5component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component45 />);
    expect(baseElement).toBeTruthy();
  });
});
