import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    FormControl,
    Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const MaterialForm = () => {
    const [formData, setFormData] = useState({
        date: null,
        note: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена:', formData);
        // Здесь можно добавить логику отправки данных
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: '500px',
                margin: '0 auto',
                padding: '20px',
                boxShadow: 3,
                borderRadius: '8px',
                backgroundColor: 'background.paper'
            }}
        >
            <Typography variant="h5" gutterBottom align="center">
                Add password
            </Typography>

            {/* Выпадающий список */}
            <FormControl fullWidth margin="normal">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </FormControl>

            {/* Поле note */}
            <TextField
                label="note"
                name="note"
                type="note"
                value={formData.note}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            {/* Поле email */}
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />

            {/* Поле пароля */}
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />


            {/* Чекбокс */}
            <FormControlLabel
                control={
                    <Checkbox
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                        color="primary"
                    />
                }
                label="Remember me"
            />


            {/* Кнопка отправки */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                fullWidth
                sx={{ mt: 3 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default MaterialForm;