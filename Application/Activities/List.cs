using Domain;
using MediatR;

namespace Application.Activities
{
    public class List
    {
        public class Query: IRequest<List<Activity>> {}
        public class Handler: IRequestHandler<Query, List<Activity>> 
        {

        }
    }
}