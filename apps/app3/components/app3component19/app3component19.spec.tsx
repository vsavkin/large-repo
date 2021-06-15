import { render } from '@testing-library/react';

import App3component19 from './app3component19';

describe('App3component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component19 />);
    expect(baseElement).toBeTruthy();
  });
});
