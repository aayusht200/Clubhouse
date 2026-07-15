INSERT INTO posts (id, title, text, created_by)
VALUES
(
    gen_random_uuid(),
    'Welcome to the Club',
    'This is the first anonymous post.',
    '487d4890-2401-4d21-9c86-d29f8609ed90'
),
(
    gen_random_uuid(),
    'Learning Express',
    'Passport authentication is starting to make sense.',
    '487d4890-2401-4d21-9c86-d29f8609ed90'
),
(
    gen_random_uuid(),
    'PostgreSQL',
    'Working directly with SQL has been a great learning experience.',
    '487d4890-2401-4d21-9c86-d29f8609ed90'
),
(
    gen_random_uuid(),
    'The Odin Project',
    'Building real projects is the best way to learn backend development.',
    '487d4890-2401-4d21-9c86-d29f8609ed90'
),
(
    gen_random_uuid(),
    'Anonymous Thoughts',
    'Only members will know who wrote this message.',
    '487d4890-2401-4d21-9c86-d29f8609ed90'
);



-- Select all rows from 'posts'
SELECT * FROM posts;