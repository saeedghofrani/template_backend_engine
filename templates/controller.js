module.exports =  ControllerTemplate = (LowerName, UpperName) => {
    const baseString = `
                        @ApiBearerAuth('access-token')
                        @ApiTags('${UpperName}')
                        @ApiHeader({
                            name: 'language-code',
                            description: 'language code',
                            schema: {
                                default: 'FA'
                            }
                        })
                        @Controller('${LowerName}')
                        @UseInterceptors(ClassSerializerInterceptor)
                        export class ${UpperName}Controller {
                            constructor(
                                private ${LowerName}Service: ${UpperName}Service
                        ) {
                        }
                        
                        @ApiOperation({ summary: '${UpperName} Pagination' })
                        @ApiResponse({ status: 200 })
                        @Post('/page')
                        getPagination${UpperName}(
                            @Body() ${LowerName}PageDto: ${UpperName}PageDto,
                        ) {
                            return this.${LowerName}Service.getPagination${UpperName}(${LowerName}PageDto)
                        }
                        
                        @ApiOperation({ summary: 'Create ${UpperName}' })
                        @ApiResponse({ status: 200, type: ${UpperName}CuResult })
                        @Post('/')
                        create${UpperName}(
                            @Body() create${LowerName}Dto: Create${UpperName}Dto,
                        ) {
                            return this.menuService.createMenu(create${LowerName}Dto);
                        }
                        
                         @ApiOperation({ summary: 'List Of ${UpperName}' })
                            @ApiResponse({ status: 200, type: ${UpperName}CuResult })
                            @Get('/list')
                            get${UpperName}List(
                            ) {
                                return this.${LowerName}Service.get${UpperName}List();
                            }
                            
                            
                             @ApiOperation({ summary: 'Delete ${UpperName}' })
                            @ApiResponse({ status: 200, type: ${UpperName}CuResult })
                            @Delete('/:id_${LowerName}')
                            delete${UpperName}(
                                @Param('id_${LowerName}') id_${LowerName}: string,
                            ) {
                                return this.${LowerName}Service.delete${UpperName}(id_${LowerName});
                            }
                            
                            
                             @ApiOperation({ summary: 'Update ${UpperName}' })
                            @ApiResponse({ status: 200, type: ${UpperName}CuResult })
                            @Put('/:id_${LowerName}')
                            update${UpperName}(
                                @Param('id_${LowerName}') id_${LowerName}: string,
                                @Body() update${UpperName}Dto: Update${UpperName}Dto,
                            ) {
                                return this.${LowerName}Service.update${UpperName}(id_${LowerName}, update${UpperName}Dto);
                            }
                        
                            @ApiOperation({ summary: 'Get One ${UpperName}' })
                            @ApiResponse({ status: 200, type: ${UpperName}GResult })
                            @Get('/front/:id_front')
                            getOneFront(
                                @Param('id_${LowerName}') id_${LowerName}: string,
                            ) {
                                return this.${LowerName}Service.getOne${UpperName}(id_${LowerName});
                            }
                            
                        }`;
    return baseString;
}