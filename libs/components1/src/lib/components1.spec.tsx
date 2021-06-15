import { render } from '@testing-library/react';

import Components1 from './components1';

describe('Components1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components1 />);
    expect(baseElement).toBeTruthy();
  });
});
