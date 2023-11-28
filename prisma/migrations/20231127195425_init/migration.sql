-- CreateTable
CREATE TABLE `User` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `DataNascimento` DATETIME(3) NOT NULL,
    `EnderecoId` INTEGER NOT NULL,
    `Senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    UNIQUE INDEX `User_EnderecoId_key`(`EnderecoId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Pais` VARCHAR(191) NOT NULL,
    `Estado` VARCHAR(191) NOT NULL,
    `Cidade` VARCHAR(191) NOT NULL,
    `Bairro` VARCHAR(191) NOT NULL,
    `Cep` VARCHAR(191) NOT NULL,
    `Complemento` VARCHAR(191) NOT NULL,
    `Numero` VARCHAR(191) NOT NULL,
    `Rua` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_EnderecoId_fkey` FOREIGN KEY (`EnderecoId`) REFERENCES `Endereco`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
