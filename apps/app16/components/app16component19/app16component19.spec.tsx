import { render } from '@testing-library/react';

import App16component19 from './app16component19';

describe('App16component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component19 />);
    expect(baseElement).toBeTruthy();
  });
});
