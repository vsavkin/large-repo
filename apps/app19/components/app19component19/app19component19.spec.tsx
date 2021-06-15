import { render } from '@testing-library/react';

import App19component19 from './app19component19';

describe('App19component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component19 />);
    expect(baseElement).toBeTruthy();
  });
});
