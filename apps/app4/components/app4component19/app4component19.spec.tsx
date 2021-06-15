import { render } from '@testing-library/react';

import App4component19 from './app4component19';

describe('App4component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component19 />);
    expect(baseElement).toBeTruthy();
  });
});
