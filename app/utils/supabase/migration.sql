create table if not exists public.urls (
    id bigint generated always as identity primary key,
    original_url text unique not null,
    short_code text unique not null,
    clicks integer default 0 not null,
    created_at timestamp with time zone default now() not null
);
-- seed data
insert into public.urls (original_url, short_code) values 
('https://jotis.me', 'porfolio'), 
('https://jotis.me/cv', 'cv'), 
('https://linkedin.com/in/jotis-cuellar', 'linkedin'),
('https://github.com/jotis1', 'github');