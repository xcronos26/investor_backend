import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class StatusController {
    public async updateById({ params, request, response }: HttpContextContract) {
        const { id } = params;
        const { status } = request.only(['status']);

        // Validações básicas
        if (!id) {
            return response.badRequest({ error: 'ID do formulário é necessário' });
        }

        if (!['Enviado', 'Em análise', 'Concluído'].includes(status)) {
            return response.badRequest({ error: 'Status inválido' });
        }

        try {
            const result = await Database.from('formulario')
                .where('id', id)
                .update({ status });

            const affectedRows = Array.isArray(result) ? result.length : result;

            if (affectedRows === 0) {
                return response.notFound({ error: 'Formulário não encontrado' });
            }

            return response.ok({ message: 'Status atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar o status:', error);
            return response.internalServerError({ error: 'Erro ao atualizar o status' });
        }
    }
}
