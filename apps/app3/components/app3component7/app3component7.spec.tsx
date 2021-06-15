import { render } from '@testing-library/react';

import App3component7 from './app3component7';

describe('App3component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component7 />);
    expect(baseElement).toBeTruthy();
  });
});
