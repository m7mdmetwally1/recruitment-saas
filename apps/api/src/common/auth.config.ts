import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
    accessToken: {
        secret: process.env.AUTH_ACCESS_TOKEN_SECRET,
    },
    refreshToken: {
        secret: process.env.AUTH_REFRESH_TOKEN_SECRET,        
    },
}));