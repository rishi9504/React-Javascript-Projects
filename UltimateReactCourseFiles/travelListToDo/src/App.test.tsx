import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App  from './App';

describe('App', () => {
  it('adds a new item to the list when handleAddItems is called', () => {
    const { getByText } = render(<App />);
    const item = { id: 1, description: 'Test Item', quantity: 1, packed: false };
    const addItemsButton = getByText('Add Item');
    fireEvent.click(addItemsButton);
    const inputField = getByText('Description');
    fireEvent.change(inputField, { target: { value: item.description } });
    const addItemButton = getByText('Add');
    fireEvent.click(addItemButton);
    expect(getByText(item.description)).toBeInTheDocument();
  });

  it('removes an item from the list when handleDeleteItem is called', () => {
    const { getByText, queryByText } = render(<App />);
    const item = { id: 1, description: 'Test Item', quantity: 1, packed: false };
    const addItemsButton = getByText('Add Item');
    fireEvent.click(addItemsButton);
    const inputField = getByText('Description');
    fireEvent.change(inputField, { target: { value: item.description } });
    const addItemButton = getByText('Add');
    fireEvent.click(addItemButton);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(queryByText(item.description)).not.toBeInTheDocument();
  });

  it('toggles the packed status of an item when handleToggleItem is called', () => {
    const { getByText, getByLabelText } = render(<App />);
    const item = { id: 1, description: 'Test Item', quantity: 1, packed: false };
    const addItemsButton = getByText('Add Item');
    fireEvent.click(addItemsButton);
    const inputField = getByText('Description');
    fireEvent.change(inputField, { target: { value: item.description } });
    const addItemButton = getByText('Add');
    fireEvent.click(addItemButton);
    const toggleButton = getByLabelText('Packed');
    fireEvent.click(toggleButton);
    expect(getByLabelText('Packed')).toBeChecked();
  });

  it('clears the list of items when handleClearList is called', () => {
    const { getByText, queryByText } = render(<App />);
    const item = { id: 1, description: 'Test Item', quantity: 1, packed: false };
    const addItemsButton = getByText('Add Item');
    fireEvent.click(addItemsButton);
    const inputField = getByText('Description');
    fireEvent.change(inputField, { target: { value: item.description } });
    const addItemButton = getByText('Add');
    fireEvent.click(addItemButton);
    const clearButton = getByText('Clear List');
    fireEvent.click(clearButton);
    expect(queryByText(item.description)).not.toBeInTheDocument();
  });
});