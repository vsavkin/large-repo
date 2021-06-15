import { render } from '@testing-library/react';

import App3component33 from './app3component33';

describe('App3component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component33 />);
    expect(baseElement).toBeTruthy();
  });
});
