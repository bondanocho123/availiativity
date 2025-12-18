import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};


export const fecthMe = createAsyncThunk("api/accounts/me", async (_, thunkAPI) => {
        try
        {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/me/`, {
                method: "GET",
                include : "credentials",
            });

            if (!res.ok) {
                throw new Error("Fetch me gagal");
            }

            const data = await res.json();
            return data;
        } 
        catch (error)
        {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const login = createAsyncThunk("api/accounts/login-email", async ({email, password}, thunkAPI) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/login-email/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error("Login gagal");
        }


        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const register = createAsyncThunk("api/accounts/register/", async ({
    username,
    email, 
    password,
    password2,
    first_name,
    last_name
}, thunkAPI) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email, 
                password,
                password2,
                email,
                first_name,
                last_name
            }),
        });

        if (!res.ok) {
            throw new Error("Register gagal");
        }


        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("api/accounts/logout", async (_, thunkAPI) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/logout/`, {
            method: "POST",
            include: "credentials",
        });
        if (!res.ok) {
            throw new Error("Logout gagal");
        }
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add async thunk reducers here if needed
        builder
            .addCase(fecthMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fecthMe.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(fecthMe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;