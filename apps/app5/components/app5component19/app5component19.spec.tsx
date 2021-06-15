import { render } from '@testing-library/react';

import App5component19 from './app5component19';

describe('App5component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component19 />);
    expect(baseElement).toBeTruthy();
  });
});
