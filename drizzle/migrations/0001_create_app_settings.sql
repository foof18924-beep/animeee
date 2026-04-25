CREATE TABLE `appSettings` (
`id` int AUTO_INCREMENT NOT NULL,
`downloadLink` text NOT NULL,
`appName` varchar(255) NOT NULL,
`createdAt` timestamp NOT NULL DEFAULT (now()),
`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT `appSettings_id` PRIMARY KEY(`id`)
);
