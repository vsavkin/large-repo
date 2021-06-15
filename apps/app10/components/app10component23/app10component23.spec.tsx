import { render } from '@testing-library/react';

import App10component23 from './app10component23';

describe('App10component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component23 />);
    expect(baseElement).toBeTruthy();
  });
});
