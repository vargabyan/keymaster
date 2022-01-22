import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import HeaderPoster from './headerPoster';

describe('Header Poster', () => {
    
    test('renders image car key', () => {
      render(<HeaderPoster />)
      expect(screen.getByAltText(/car key/i)).toBeInTheDocument() 
      
      expect(userEvent.click(screen.getByTestId('next'))).toBe()
      expect(userEvent.click(screen.getByTestId('back'))).toBeUndefined()
      userEvent.click(screen.getByTestId('next'))
      
      expect(screen.queryByAltText(/car key/i)).not.toBeInTheDocument() 
      expect(screen.getByAltText(/start stop/i)).toBeInTheDocument()

      expect(userEvent.click(screen.getByTestId('back'))).toBe()
      expect(userEvent.click(screen.getByTestId('next'))).toBeUndefined()
      userEvent.click(screen.getByTestId('back'))

      expect(screen.queryByAltText(/start stop/i)).not.toBeInTheDocument() 
      expect(screen.getByAltText(/car key/i)).toBeInTheDocument()

    });

});
